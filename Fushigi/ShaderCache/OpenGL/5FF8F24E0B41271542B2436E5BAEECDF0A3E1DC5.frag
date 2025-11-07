#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform samplerCube fp_t_tcb_16;
layout (binding = 2) uniform samplerCube fp_t_tcb_18;
layout (binding = 3) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 4) uniform sampler2D fp_t_tcb_24;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec2 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise vec3 temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise vec3 temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise vec3 temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise vec4 temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    // 0x000008: 0xE003FF87CFF7FF02 Ipa
    // 0x000010: 0x5080000000470202 Mufu
    // 0x000018: 0xE043FF8D0027FF15 Ipa
    temp_0 = in_attr5.x;
    // 0x000028: 0xE043FF8D4027FF14 Ipa
    temp_1 = in_attr5.y;
    // 0x000030: 0xD830026FF1471500 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000038: 0xE043FF8A0027FF0E Ipa
    temp_5 = in_attr2.x;
    // 0x000048: 0xE043FF890027FF0D Ipa
    temp_6 = in_attr1.x;
    // 0x000050: 0xE043FF880027FF06 Ipa
    temp_7 = in_attr0.x;
    // 0x000058: 0xE043FF8A4027FF07 Ipa
    temp_8 = in_attr2.y;
    // 0x000068: 0xE043FF894027FF09 Ipa
    temp_9 = in_attr1.y;
    // 0x000070: 0xE043FF884027FF0B Ipa
    temp_10 = in_attr0.y;
    // 0x000078: 0xE043FF898027FF0A Ipa
    temp_11 = in_attr1.z;
    // 0x000088: 0xE043FF888027FF0C Ipa
    temp_12 = in_attr0.z;
    // 0x000090: 0xE043FF8B0027FF05 Ipa
    temp_13 = in_attr3.x;
    // 0x000098: 0xE043FF8B4027FF04 Ipa
    temp_14 = in_attr3.y;
    // 0x0000A8: 0xE043FF8A8027FF08 Ipa
    temp_15 = in_attr2.z;
    // 0x0000B0: 0xE043FF8B8027FF03 Ipa
    temp_16 = in_attr3.z;
    // 0x0000B8: 0x5C68100000E70E10 Fmul
    temp_17 = temp_5 * temp_5;
    // 0x0000C8: 0x5C68100000D70D12 Fmul
    temp_18 = temp_6 * temp_6;
    // 0x0000D0: 0x5C68100000670611 Fmul
    temp_19 = temp_7 * temp_7;
    // 0x0000D8: 0x59A008000077070F Ffma
    temp_20 = fma(temp_8, temp_8, temp_17);
    // 0x0000E8: 0x59A0090000970910 Ffma
    temp_21 = fma(temp_9, temp_9, temp_18);
    // 0x0000F0: 0x59A0088000B70B12 Ffma
    temp_22 = fma(temp_10, temp_10, temp_19);
    // 0x0000F8: 0x5C68100000570513 Fmul
    temp_23 = temp_13 * temp_13;
    // 0x000108: 0x59A007800087080F Ffma
    temp_24 = fma(temp_15, temp_15, temp_20);
    // 0x000110: 0x59A0080000A70A10 Ffma
    temp_25 = fma(temp_11, temp_11, temp_21);
    // 0x000118: 0x5080000000570F11 Mufu
    temp_26 = inversesqrt(temp_24);
    // 0x000128: 0x59A0090000C70C12 Ffma
    temp_27 = fma(temp_12, temp_12, temp_22);
    // 0x000130: 0x5080000000571010 Mufu
    temp_28 = inversesqrt(temp_25);
    // 0x000138: 0x59A0098000470416 Ffma
    temp_29 = fma(temp_14, temp_14, temp_23);
    // 0x000148: 0x5080000000571219 Mufu
    temp_30 = inversesqrt(temp_27);
    // 0x000150: 0x59A00B0000370316 Ffma
    temp_31 = fma(temp_16, temp_16, temp_29);
    // 0x000158: 0x5080000000571616 Mufu
    temp_32 = inversesqrt(temp_31);
    // 0x000168: 0x5C68100001170E0E Fmul
    temp_33 = temp_5 * temp_26;
    // 0x000170: 0x5C68100001170707 Fmul
    temp_34 = temp_8 * temp_26;
    // 0x000178: 0x5C68100001070D0D Fmul
    temp_35 = temp_6 * temp_28;
    // 0x000188: 0x5C68100001070909 Fmul
    temp_36 = temp_9 * temp_28;
    // 0x000190: 0x5C68100001070A0A Fmul
    temp_37 = temp_11 * temp_28;
    // 0x000198: 0x5C68100001970610 Fmul
    temp_38 = temp_7 * temp_30;
    // 0x0001A8: 0x5C68100001170808 Fmul
    temp_39 = temp_15 * temp_26;
    // 0x0001B0: 0x5C68100001970B0B Fmul
    temp_40 = temp_10 * temp_30;
    // 0x0001B8: 0x5C68100001970C0C Fmul
    temp_41 = temp_12 * temp_30;
    // 0x0001C8: 0x5C69100001670505 Fmul
    temp_42 = 0.0 - temp_32;
    temp_43 = temp_13 * temp_42;
    // 0x0001D0: 0x5C6910000167030F Fmul
    temp_44 = 0.0 - temp_32;
    temp_45 = temp_16 * temp_44;
    // 0x0001D8: 0x5C69100001670404 Fmul
    temp_46 = 0.0 - temp_32;
    temp_47 = temp_14 * temp_46;
    // 0x0001E8: 0x4C98079809A70016 Mov
    // 0x0001F0: 0x4C58301805C70503 Fadd
    temp_48 = 0.0 - fp_c6.data[23].x;
    temp_49 = temp_43 + temp_48;
    // 0x0001F8: 0x4C58101408171616 Fadd
    temp_50 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x000208: 0x5C68100000170106 Fmul
    temp_51 = temp_4 * temp_4;
    // 0x000210: 0x5C68100000170E0E Fmul
    temp_52 = temp_33 * temp_4;
    // 0x000218: 0x5C68100000170712 Fmul
    temp_53 = temp_34 * temp_4;
    // 0x000228: 0x4C58301805D70407 Fadd
    temp_54 = 0.0 - fp_c6.data[23].y;
    temp_55 = temp_47 + temp_54;
    // 0x000230: 0x5C68100000170801 Fmul
    temp_56 = temp_39 * temp_4;
    // 0x000238: 0x4C58301805E70F08 Fadd
    temp_57 = 0.0 - fp_c6.data[23].z;
    temp_58 = temp_45 + temp_57;
    // 0x000248: 0x59A0030000070006 Ffma
    temp_59 = fma(temp_3, temp_3, temp_51);
    // 0x000250: 0x59A0070000D7000D Ffma
    temp_60 = fma(temp_3, temp_35, temp_52);
    // 0x000258: 0x5C6810000037030E Fmul
    temp_61 = temp_49 * temp_49;
    // 0x000268: 0x59A0090000970009 Ffma
    temp_62 = fma(temp_3, temp_36, temp_53);
    // 0x000270: 0x59A0008000A70001 Ffma
    temp_63 = fma(temp_3, temp_37, temp_56);
    // 0x000278: 0x385D103F80070606 Fadd
    temp_64 = 0.0 - temp_59;
    temp_65 = temp_64 + 1.0;
    temp_66 = clamp(temp_65, 0.0, 1.0);
    // 0x000288: 0x5080000000870606 Mufu
    temp_67 = sqrt(temp_66);
    // 0x000290: 0x59A007000077070E Ffma
    temp_68 = fma(temp_55, temp_55, temp_61);
    // 0x000298: 0x59A007000087080E Ffma
    temp_69 = fma(temp_58, temp_58, temp_68);
    // 0x0002A8: 0x5080000000570E0E Mufu
    temp_70 = inversesqrt(temp_69);
    // 0x0002B0: 0x59A006800067100D Ffma
    temp_71 = fma(temp_38, temp_67, temp_60);
    // 0x0002B8: 0x59A0048000670B0B Ffma
    temp_72 = fma(temp_40, temp_67, temp_62);
    // 0x0002C8: 0x59A0008000670C0C Ffma
    temp_73 = fma(temp_41, temp_67, temp_63);
    // 0x0002D0: 0x5C68100000D70D00 Fmul
    temp_74 = temp_71 * temp_71;
    // 0x0002D8: 0x5C68100000E70312 Fmul
    temp_75 = temp_49 * temp_70;
    // 0x0002E8: 0x5C68100000E70809 Fmul
    temp_76 = temp_58 * temp_70;
    // 0x0002F0: 0x59A0000000B70B01 Ffma
    temp_77 = fma(temp_72, temp_72, temp_74);
    // 0x0002F8: 0x5C68100001270503 Fmul
    temp_78 = temp_43 * temp_75;
    // 0x000308: 0x59A0008000C70C00 Ffma
    temp_79 = fma(temp_73, temp_73, temp_77);
    // 0x000310: 0x5C68100000E70701 Fmul
    temp_80 = temp_55 * temp_70;
    // 0x000318: 0x508000000057000A Mufu
    temp_81 = inversesqrt(temp_79);
    // 0x000328: 0x01040DF760C7F007 Mov32i
    // 0x000330: 0x59A0018000170410 Ffma
    temp_82 = fma(temp_47, temp_80, temp_78);
    // 0x000338: 0x59A4080000970F10 Ffma
    temp_83 = fma(temp_45, temp_76, temp_82);
    temp_84 = clamp(temp_83, 0.0, 1.0);
    // 0x000348: 0x5C68100000A70D08 Fmul
    temp_85 = temp_71 * temp_81;
    // 0x000350: 0x5C68100000A70B03 Fmul
    temp_86 = temp_72 * temp_81;
    // 0x000358: 0x5C68100000A70C0A Fmul
    temp_87 = temp_73 * temp_81;
    // 0x000368: 0x5C68100000570806 Fmul
    temp_88 = temp_85 * temp_43;
    // 0x000370: 0x4C69101805C7081C Fmul
    temp_89 = 0.0 - fp_c6.data[23].x;
    temp_90 = temp_85 * temp_89;
    // 0x000378: 0x59A003000047031D Ffma
    temp_91 = fma(temp_86, temp_47, temp_88);
    // 0x000388: 0x49A2038400071006 Ffma
    temp_92 = fma(temp_84, fp_c1.data[0].x, -6.98316002);
    // 0x000390: 0x4C98079809070007 Mov
    // 0x000398: 0x49A10E1805D7031C Ffma
    temp_93 = 0.0 - fp_c6.data[23].y;
    temp_94 = fma(temp_86, temp_93, temp_90);
    // 0x0003A8: 0x59A40E8000F70A1D Ffma
    temp_95 = fma(temp_87, temp_45, temp_91);
    temp_96 = clamp(temp_95, 0.0, 1.0);
    // 0x0003B0: 0x5C68100000671000 Fmul
    temp_97 = temp_84 * temp_92;
    // 0x0003B8: 0x4C69101805C71206 Fmul
    temp_98 = 0.0 - fp_c6.data[23].x;
    temp_99 = temp_75 * temp_98;
    // 0x0003C8: 0x5C68100001270812 Fmul
    temp_100 = temp_85 * temp_75;
    // 0x0003D0: 0x49A50E1805E70A1C Ffma
    temp_101 = 0.0 - fp_c6.data[23].z;
    temp_102 = fma(temp_87, temp_101, temp_94);
    temp_103 = clamp(temp_102, 0.0, 1.0);
    // 0x0003D8: 0x51A1039809071D07 Ffma
    temp_104 = 0.0 - fp_c6.data[36].x;
    temp_105 = fma(temp_96, temp_104, fp_c6.data[36].x);
    // 0x0003E8: 0x5C68100001D70A10 Fmul
    temp_106 = temp_87 * temp_96;
    // 0x0003F0: 0x5080400000370707 Mufu
    temp_107 = abs(temp_105);
    temp_108 = log2(temp_107);
    // 0x0003F8: 0x49A1031805D70106 Ffma
    temp_109 = 0.0 - fp_c6.data[23].y;
    temp_110 = fma(temp_80, temp_109, temp_99);
    // 0x000408: 0x59A009000017030B Ffma
    temp_111 = fma(temp_86, temp_80, temp_100);
    // 0x000410: 0x5C68100001D7080C Fmul
    temp_112 = temp_85 * temp_96;
    // 0x000418: 0x5C68100001D7030E Fmul
    temp_113 = temp_86 * temp_96;
    // 0x000428: 0x4C9807980A070012 Mov
    // 0x000430: 0x32A207C00007100F Ffma
    temp_114 = 0.0 - temp_45;
    temp_115 = fma(temp_106, 2.0, temp_114);
    // 0x000438: 0x4C98079800A70010 Mov
    // 0x000448: 0x4C68101801471C1A Fmul
    temp_116 = temp_103 * fp_c6.data[5].x;
    // 0x000450: 0x32A202C000070C0D Ffma
    temp_117 = 0.0 - temp_43;
    temp_118 = fma(temp_112, 2.0, temp_117);
    // 0x000458: 0x32A2024000070E0E Ffma
    temp_119 = 0.0 - temp_47;
    temp_120 = fma(temp_113, 2.0, temp_119);
    // 0x000468: 0x0103F0000007F005 Mov32i
    // 0x000470: 0x4C9807980087000C Mov
    // 0x000478: 0x4C68101809170701 Fmul
    temp_121 = temp_108 * fp_c6.data[36].y;
    // 0x000488: 0x4C59101800671007 Fadd
    temp_122 = 0.0 - fp_c6.data[2].z;
    temp_123 = temp_122 + fp_c6.data[1].z;
    // 0x000490: 0x4C98079800970004 Mov
    // 0x000498: 0x5C62578000870310 Fmnmx
    temp_124 = abs(temp_86);
    temp_125 = abs(temp_85);
    temp_126 = max(temp_124, temp_125);
    // 0x0004A8: 0x1E23EA2F98371A1A Fmul32i
    temp_127 = temp_116 * 0.318309873;
    // 0x0004B0: 0x4C59101800470C0C Fadd
    temp_128 = 0.0 - fp_c6.data[2].x;
    temp_129 = temp_128 + fp_c6.data[1].x;
    // 0x0004B8: 0x5C9000800017001B Rro
    // 0x0004C8: 0x4C59101800570404 Fadd
    temp_130 = 0.0 - fp_c6.data[2].y;
    temp_131 = temp_130 + fp_c6.data[1].y;
    // 0x0004D0: 0x5084000000271B1B Mufu
    temp_132 = exp2(temp_121);
    temp_133 = clamp(temp_132, 0.0, 1.0);
    // 0x0004D8: 0x5C60578001070A11 Fmnmx
    temp_134 = abs(temp_87);
    temp_135 = max(temp_134, temp_126);
    // 0x0004E8: 0x32A002BF00070301 Ffma
    temp_136 = fma(temp_86, 0.5, 0.5);
    // 0x0004F0: 0x5080000000471111 Mufu
    temp_137 = 1.0 / temp_135;
    // 0x0004F8: 0x5C90008000070010 Rro
    // 0x000508: 0x5080000000271010 Mufu
    temp_138 = exp2(temp_97);
    // 0x000510: 0x386013BF80071212 Fmnmx
    temp_139 = min(fp_c6.data[40].x, 1.0);
    // 0x000518: 0x51A0061800870100 Ffma
    temp_140 = fma(temp_136, temp_129, fp_c6.data[2].x);
    // 0x000528: 0x51A0021800970104 Ffma
    temp_141 = fma(temp_136, temp_131, fp_c6.data[2].y);
    // 0x000530: 0x51A0039800A70107 Ffma
    temp_142 = fma(temp_136, temp_123, fp_c6.data[2].z);
    // 0x000538: 0x49A5031805E70901 Ffma
    temp_143 = 0.0 - fp_c6.data[23].z;
    temp_144 = fma(temp_76, temp_143, temp_110);
    temp_145 = clamp(temp_144, 0.0, 1.0);
    // 0x000548: 0x59A4058000970A06 Ffma
    temp_146 = fma(temp_87, temp_76, temp_111);
    temp_147 = clamp(temp_146, 0.0, 1.0);
    // 0x000550: 0x4C6017840027120B Fmnmx
    temp_148 = max(temp_139, fp_c1.data[0].z);
    // 0x000558: 0x5C68100001671B1B Fmul
    temp_149 = temp_133 * temp_50;
    // 0x000568: 0x5C68100001170808 Fmul
    temp_150 = temp_85 * temp_137;
    // 0x000570: 0x5C68100001170309 Fmul
    temp_151 = temp_86 * temp_137;
    // 0x000578: 0x5C69100001170A0A Fmul
    temp_152 = 0.0 - temp_137;
    temp_153 = temp_87 * temp_152;
    // 0x000588: 0x49A1081407B71013 Ffma
    temp_154 = 0.0 - fp_c5.data[30].w;
    temp_155 = fma(temp_138, temp_154, temp_138);
    // 0x000590: 0xC0BA0163EFF70810 Tex
    temp_156 = textureLod(fp_t_tcb_16, vec3(temp_150, temp_151, temp_153), 0.0).xyz;
    temp_157 = temp_156.x;
    temp_158 = temp_156.y;
    temp_159 = temp_156.z;
    // 0x000598: 0x5C62578000E70D18 Fmnmx
    temp_160 = abs(temp_118);
    temp_161 = abs(temp_120);
    temp_162 = max(temp_160, temp_161);
    // 0x0005A8: 0x3868104080070B17 Fmul
    temp_163 = temp_148 * 4.0;
    // 0x0005B0: 0x38681040E0070B1E Fmul
    temp_164 = temp_148 * 7.0;
    // 0x0005B8: 0x5C98078000A70016 Mov
    // 0x0005C8: 0x4C58101407B71313 Fadd
    temp_165 = temp_155 + fp_c5.data[30].w;
    // 0x0005D0: 0x4C68101808C71B03 Fmul
    temp_166 = temp_149 * fp_c6.data[35].x;
    // 0x0005D8: 0x5C60578001870F18 Fmnmx
    temp_167 = abs(temp_115);
    temp_168 = max(temp_167, temp_162);
    // 0x0005E8: 0xD9A20181F1670816 Texs
    temp_169 = textureLod(fp_t_tcb_18, vec3(temp_150, temp_151, temp_153), temp_163).xyz;
    temp_170 = temp_169.x;
    temp_171 = temp_169.y;
    temp_172 = temp_169.z;
    // 0x0005F0: 0x59A10D0001A7130A Ffma
    temp_173 = 0.0 - temp_127;
    temp_174 = fma(temp_165, temp_173, temp_127);
    // 0x0005F8: 0x508000000047180C Mufu
    temp_175 = 1.0 / temp_168;
    // 0x000608: 0x5C68100000C70D0D Fmul
    temp_176 = temp_118 * temp_175;
    // 0x000610: 0x5C68100000C70E0E Fmul
    temp_177 = temp_120 * temp_175;
    // 0x000618: 0x5C69100000C70F0F Fmul
    temp_178 = 0.0 - temp_175;
    temp_179 = temp_115 * temp_178;
    // 0x000628: 0x010000000017F00C Mov32i
    // 0x000630: 0xC1BA0143F1E70C0C Tex
    temp_180 = textureLod(fp_t_tcb_14, vec4(temp_176, temp_177, temp_179, float(1)), temp_164).xyz;
    temp_181 = temp_180.x;
    temp_182 = temp_180.y;
    temp_183 = temp_180.z;
    // 0x000638: 0xD832024181471514 Texs
    temp_184 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyzw;
    temp_185 = temp_184.x;
    temp_186 = temp_184.y;
    temp_187 = temp_184.z;
    temp_188 = temp_184.w;
    // 0x000648: 0x49A101940827031A Ffma
    temp_189 = 0.0 - fp_c5.data[32].z;
    temp_190 = fma(temp_166, temp_189, temp_166);
    // 0x000650: 0x32A002BF00070B05 Ffma
    temp_191 = fma(temp_148, 0.5, 0.5);
    // 0x000658: 0x4C68101408270303 Fmul
    temp_192 = temp_166 * fp_c5.data[32].z;
    // 0x000668: 0x5C58100000A71A1A Fadd
    temp_193 = temp_190 + temp_174;
    // 0x000670: 0x4C68101808D71B0A Fmul
    temp_194 = temp_149 * fp_c6.data[35].y;
    // 0x000678: 0x4C68101808E71B1B Fmul
    temp_195 = temp_149 * fp_c6.data[35].z;
    // 0x000688: 0x4C68101801671C0F Fmul
    temp_196 = temp_103 * fp_c6.data[5].z;
    // 0x000690: 0x49A1051408270A09 Ffma
    temp_197 = 0.0 - fp_c5.data[32].z;
    temp_198 = fma(temp_194, temp_197, temp_194);
    // 0x000698: 0x1E23EA2F98370F08 Fmul32i
    temp_199 = temp_196 * 0.318309873;
    // 0x0006A8: 0x3859103F80070B0F Fadd
    temp_200 = 0.0 - temp_148;
    temp_201 = temp_200 + 1.0;
    // 0x0006B0: 0x51A4058400270B0B Ffma
    temp_202 = fma(temp_148, temp_148, fp_c1.data[0].z);
    temp_203 = clamp(temp_202, 0.0, 1.0);
    // 0x0006B8: 0x5C68100000F70F0F Fmul
    temp_204 = temp_201 * temp_201;
    // 0x0006C8: 0xF0F0000034270000 Depbar
    // 0x0006D0: 0x49A0080400170000 Ffma
    temp_205 = fma(temp_140, fp_c1.data[0].y, temp_157);
    // 0x0006D8: 0x4C68101801571C10 Fmul
    temp_206 = temp_103 * fp_c6.data[5].y;
    // 0x0006E8: 0x49A0088400170404 Ffma
    temp_207 = fma(temp_141, fp_c1.data[0].y, temp_158);
    // 0x0006F0: 0x49A0090400170707 Ffma
    temp_208 = fma(temp_142, fp_c1.data[0].y, temp_159);
    // 0x0006F8: 0x1E23EA2F98371010 Fmul32i
    temp_209 = temp_206 * 0.318309873;
    // 0x000708: 0x59A1080001071310 Ffma
    temp_210 = 0.0 - temp_209;
    temp_211 = fma(temp_165, temp_210, temp_209);
    // 0x000710: 0x59A1040000871313 Ffma
    temp_212 = 0.0 - temp_199;
    temp_213 = fma(temp_165, temp_212, temp_199);
    // 0x000718: 0x49A10D9408271B08 Ffma
    temp_214 = 0.0 - fp_c5.data[32].z;
    temp_215 = fma(temp_195, temp_214, temp_195);
    // 0x000728: 0x4C68101408271B1B Fmul
    temp_216 = temp_195 * fp_c5.data[32].z;
    // 0x000730: 0x5C58100001070909 Fadd
    temp_217 = temp_198 + temp_211;
    // 0x000738: 0x5C68100000F70F10 Fmul
    temp_218 = temp_204 * temp_204;
    // 0x000748: 0x1E23E468DB971D0F Fmul32i
    temp_219 = temp_96 * 0.193900004;
    // 0x000750: 0x5C58100001370808 Fadd
    temp_220 = temp_215 + temp_213;
    // 0x000758: 0x0104066978D7F013 Mov32i
    // 0x000768: 0x5C58100000470904 Fadd
    temp_221 = temp_217 + temp_207;
    // 0x000770: 0x49A007840047100F Ffma
    temp_222 = fma(temp_218, fp_c1.data[1].x, temp_219);
    // 0x000778: 0x5C58100000770807 Fadd
    temp_223 = temp_220 + temp_208;
    // 0x000788: 0x49A2098400571013 Ffma
    temp_224 = fma(temp_218, fp_c1.data[1].y, -3.60299993);
    // 0x000790: 0x088BF05D63970F0F Fadd32i
    temp_225 = temp_222 + -0.522800028;
    // 0x000798: 0xF0F0000034170000 Depbar
    // 0x0007A8: 0x49A00B1808570C0C Ffma
    temp_226 = fma(temp_181, fp_c6.data[33].y, temp_170);
    // 0x0007B0: 0x51A0098400671013 Ffma
    temp_227 = fma(temp_218, temp_224, fp_c1.data[1].z);
    // 0x0007B8: 0x5C68100000F71D1E Fmul
    temp_228 = temp_96 * temp_225;
    // 0x0007C8: 0x59A00F000137100F Ffma
    temp_229 = fma(temp_218, temp_227, temp_228);
    // 0x0007D0: 0x0103E2CD9E87F013 Mov32i
    // 0x0007D8: 0x4C5C100400B70F0F Fadd
    temp_230 = temp_229 + fp_c1.data[2].w;
    temp_231 = clamp(temp_230, 0.0, 1.0);
    // 0x0007E8: 0x49A2098400971013 Ffma
    temp_232 = fma(temp_218, fp_c1.data[2].y, -0.168799996);
    // 0x0007F0: 0x5C68100001371010 Fmul
    temp_233 = temp_218 * temp_232;
    // 0x0007F8: 0x010410676C97F013 Mov32i
    // 0x000808: 0x49A0098400771D13 Ffma
    temp_234 = fma(temp_96, fp_c1.data[1].w, 8.40400028);
    // 0x000810: 0x51A0098400871D13 Ffma
    temp_235 = fma(temp_96, temp_234, fp_c1.data[2].x);
    // 0x000818: 0x51A0098400A71D13 Ffma
    temp_236 = fma(temp_96, temp_235, fp_c1.data[2].z);
    // 0x000828: 0x5C60138001371010 Fmnmx
    temp_237 = min(temp_233, temp_236);
    // 0x000830: 0x4C98079407B70013 Mov
    // 0x000838: 0x5C5C30000FF71010 Fadd
    temp_238 = temp_237 + -0.0;
    temp_239 = clamp(temp_238, 0.0, 1.0);
    // 0x000848: 0x386C104248071313 Fmul
    temp_240 = fp_c5.data[30].w * 50.0;
    temp_241 = clamp(temp_240, 0.0, 1.0);
    // 0x000850: 0x5C68100001071313 Fmul
    temp_242 = temp_241 * temp_239;
    // 0x000858: 0x5C58300001070F10 Fadd
    temp_243 = 0.0 - temp_239;
    temp_244 = temp_231 + temp_243;
    // 0x000868: 0x49A0099407B7100F Ffma
    temp_245 = fma(temp_244, fp_c5.data[30].w, temp_242);
    // 0x000870: 0x5C68100000B70B10 Fmul
    temp_246 = temp_203 * temp_203;
    // 0x000878: 0x5C68120000570513 Fmul
    temp_247 = temp_191 * 0.5;
    temp_248 = temp_247 * temp_191;
    // 0x000888: 0x59A2030001070610 Ffma
    temp_249 = 0.0 - temp_147;
    temp_250 = fma(temp_147, temp_246, temp_249);
    // 0x000890: 0x59A10E8001371D1D Ffma
    temp_251 = 0.0 - temp_248;
    temp_252 = fma(temp_96, temp_251, temp_96);
    // 0x000898: 0x59A10E0001371C05 Ffma
    temp_253 = 0.0 - temp_248;
    temp_254 = fma(temp_103, temp_253, temp_103);
    // 0x0008A8: 0x51A0080400370610 Ffma
    temp_255 = fma(temp_147, temp_250, fp_c1.data[0].w);
    // 0x0008B0: 0x5C58100001D7131D Fadd
    temp_256 = temp_248 + temp_252;
    // 0x0008B8: 0x5080000000471010 Mufu
    temp_257 = 1.0 / temp_255;
    // 0x0008C8: 0x5C58100000571313 Fadd
    temp_258 = temp_248 + temp_254;
    // 0x0008D0: 0x5080000000471D05 Mufu
    temp_259 = 1.0 / temp_256;
    // 0x0008D8: 0x01040DF760C7F006 Mov32i
    // 0x0008E8: 0x5080000000471313 Mufu
    temp_260 = 1.0 / temp_258;
    // 0x0008F0: 0x49A2030400070106 Ffma
    temp_261 = fma(temp_145, fp_c1.data[0].x, -6.98316002);
    // 0x0008F8: 0x5C68100001070B0B Fmul
    temp_262 = temp_203 * temp_257;
    // 0x000908: 0x49A00B9808570D10 Ffma
    temp_263 = fma(temp_182, fp_c6.data[33].y, temp_171);
    // 0x000910: 0x49A00F9808570E0D Ffma
    temp_264 = fma(temp_183, fp_c6.data[33].y, temp_172);
    // 0x000918: 0x5C68100000670106 Fmul
    temp_265 = temp_145 * temp_261;
    // 0x000928: 0x5C68120001370505 Fmul
    temp_266 = temp_259 * 0.5;
    temp_267 = temp_266 * temp_260;
    // 0x000930: 0x5C68100000B70B0B Fmul
    temp_268 = temp_262 * temp_262;
    // 0x000938: 0x5C68100000570B05 Fmul
    temp_269 = temp_268 * temp_267;
    // 0x000948: 0x5C9000800067000B Rro
    // 0x000950: 0x5080000000270B01 Mufu
    temp_270 = exp2(temp_265);
    // 0x000958: 0x5C68100000571C1C Fmul
    temp_271 = temp_103 * temp_269;
    // 0x000968: 0x49A1009407B70101 Ffma
    temp_272 = 0.0 - fp_c5.data[30].w;
    temp_273 = fma(temp_270, temp_272, temp_270);
    // 0x000970: 0x4C58101407B70105 Fadd
    temp_274 = temp_273 + fp_c5.data[30].w;
    // 0x000978: 0x4C68101801470501 Fmul
    temp_275 = temp_274 * fp_c6.data[5].x;
    // 0x000988: 0x5C68100001C70101 Fmul
    temp_276 = temp_275 * temp_271;
    // 0x000990: 0x49A0018400C70101 Ffma
    temp_277 = fma(temp_276, fp_c1.data[3].x, temp_192);
    // 0x000998: 0x4C68101801570503 Fmul
    temp_278 = temp_274 * fp_c6.data[5].y;
    // 0x0009A8: 0x4C68101801670505 Fmul
    temp_279 = temp_274 * fp_c6.data[5].z;
    // 0x0009B0: 0x59A0008000C70F01 Ffma
    temp_280 = fma(temp_245, temp_226, temp_277);
    // 0x0009B8: 0x5C68100001C70303 Fmul
    temp_281 = temp_278 * temp_271;
    // 0x0009C8: 0x5C68100001C70506 Fmul
    temp_282 = temp_279 * temp_271;
    // 0x0009D0: 0x4C68101408270A05 Fmul
    temp_283 = temp_194 * fp_c5.data[32].z;
    // 0x0009D8: 0xE043FF8C8027FF0A Ipa
    temp_284 = in_attr4.z;
    // 0x0009E8: 0x49A00D8400C70606 Ffma
    temp_285 = fma(temp_282, fp_c1.data[3].x, temp_216);
    // 0x0009F0: 0x49A0028400C70305 Ffma
    temp_286 = fma(temp_281, fp_c1.data[3].x, temp_283);
    // 0x0009F8: 0x5C58100000071A03 Fadd
    temp_287 = temp_193 + temp_205;
    // 0x000A08: 0x385C103F80071400 Fadd
    temp_288 = temp_185 + 1.0;
    temp_289 = clamp(temp_288, 0.0, 1.0);
    // 0x000A10: 0x385C103F80071802 Fadd
    temp_290 = temp_187 + 1.0;
    temp_291 = clamp(temp_290, 0.0, 1.0);
    // 0x000A18: 0x59A0028001070F0B Ffma
    temp_292 = fma(temp_245, temp_263, temp_286);
    // 0x000A28: 0x59A0030000D70F05 Ffma
    temp_293 = fma(temp_245, temp_264, temp_285);
    // 0x000A30: 0x59A0008001470303 Ffma
    temp_294 = fma(temp_287, temp_185, temp_280);
    // 0x000A38: 0x385C103F80071501 Fadd
    temp_295 = temp_186 + 1.0;
    temp_296 = clamp(temp_295, 0.0, 1.0);
    // 0x000A48: 0x59A0058001570406 Ffma
    temp_297 = fma(temp_221, temp_186, temp_292);
    // 0x000A50: 0x59A0028001870705 Ffma
    temp_298 = fma(temp_223, temp_187, temp_293);
    // 0x000A58: 0x5C68100000370000 Fmul
    temp_299 = temp_289 * temp_294;
    // 0x000A68: 0x5C98078001970003 Mov
    // 0x000A70: 0x5C68100000670101 Fmul
    temp_300 = temp_296 * temp_297;
    // 0x000A78: 0x5C68100000570202 Fmul
    temp_301 = temp_291 * temp_298;
    // 0x000A88: 0x0103F6000007F005 Mov32i
    // 0x000A90: 0x5C9807800FF70006 Mov
    // 0x000A98: 0x5C98078000370007 Mov
    // 0x000AA8: 0x4C58100C03870A04 Fadd
    temp_302 = temp_284 + fp_c3.data[14].x;
    // 0x000AB0: 0x49A37F8C03C70404 Ffma
    temp_303 = 0.0 - fp_c3.data[15].x;
    temp_304 = fma(temp_302, temp_303, -0.0);
    // 0x000AB8: 0xE30000000007000F Exit
    out_attr0.x = temp_299;
    out_attr0.y = temp_300;
    out_attr0.z = temp_301;
    out_attr0.w = temp_188;
    out_attr1.x = temp_304;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_188;
    return;
}
