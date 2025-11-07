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

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform samplerCube fp_t_tcb_16;
layout (binding = 2) uniform sampler2D fp_t_tcb_34;
layout (binding = 3) uniform sampler2D fp_t_tcb_20;
layout (binding = 4) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 6) in vec4 in_attr6;
layout (location = 7) in vec4 in_attr7;
layout (location = 8) in vec4 in_attr8;

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
    precise vec3 temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise vec3 temp_84;
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
    precise float temp_156;
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
    precise float temp_169;
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
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
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
    // 0x000008: 0x4C98079809B70016 Mov
    // 0x000010: 0xE003FF87CFF7FF06 Ipa
    // 0x000018: 0x5080000000470606 Mufu
    // 0x000028: 0xE043FF8E0067FF03 Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E4067FF0C Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xD830026FF0C70300 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xE043FF8A0067FF0E Ipa
    temp_5 = in_attr2.x;
    // 0x000050: 0xE043FF890067FF07 Ipa
    temp_6 = in_attr1.x;
    // 0x000058: 0xE043FF8A4067FF0A Ipa
    temp_7 = in_attr2.y;
    // 0x000068: 0xE043FF894067FF09 Ipa
    temp_8 = in_attr1.y;
    // 0x000070: 0xE043FF8A8067FF0B Ipa
    temp_9 = in_attr2.z;
    // 0x000078: 0xE043FF898067FF08 Ipa
    temp_10 = in_attr1.z;
    // 0x000088: 0xE043FF880067FF02 Ipa
    temp_11 = in_attr0.x;
    // 0x000090: 0xE043FF884067FF04 Ipa
    temp_12 = in_attr0.y;
    // 0x000098: 0x5C68100000E70E05 Fmul
    temp_13 = temp_5 * temp_5;
    // 0x0000A8: 0x5C6810000077070F Fmul
    temp_14 = temp_6 * temp_6;
    // 0x0000B0: 0x59A0028000A70A0D Ffma
    temp_15 = fma(temp_7, temp_7, temp_13);
    // 0x0000B8: 0xE043FF888067FF05 Ipa
    temp_16 = in_attr0.z;
    // 0x0000C8: 0x59A0078000970911 Ffma
    temp_17 = fma(temp_8, temp_8, temp_14);
    // 0x0000D0: 0x5C68100000270215 Fmul
    temp_18 = temp_11 * temp_11;
    // 0x0000D8: 0x59A0068000B70B0F Ffma
    temp_19 = fma(temp_9, temp_9, temp_15);
    // 0x0000E8: 0x59A0088000870811 Ffma
    temp_20 = fma(temp_10, temp_10, temp_17);
    // 0x0000F0: 0x5080000000570F0D Mufu
    temp_21 = inversesqrt(temp_19);
    // 0x0000F8: 0x4C58101408171616 Fadd
    temp_22 = fp_c6.data[38].w + fp_c5.data[32].y;
    // 0x000108: 0x5080000000571112 Mufu
    temp_23 = inversesqrt(temp_20);
    // 0x000110: 0x5C68100000D70E0E Fmul
    temp_24 = temp_5 * temp_21;
    // 0x000118: 0xE043FF904067FF11 Ipa
    temp_25 = in_attr8.y;
    // 0x000128: 0x5C68100000D70A0A Fmul
    temp_26 = temp_7 * temp_21;
    // 0x000130: 0x5C68100000D70B0B Fmul
    temp_27 = temp_9 * temp_21;
    // 0x000138: 0x5C6810000127090D Fmul
    temp_28 = temp_8 * temp_23;
    // 0x000148: 0x5C68100001270809 Fmul
    temp_29 = temp_10 * temp_23;
    // 0x000150: 0x5C68100001270713 Fmul
    temp_30 = temp_6 * temp_23;
    // 0x000158: 0xE043FF908067FF12 Ipa
    temp_31 = in_attr8.z;
    // 0x000168: 0x59A00A8000470408 Ffma
    temp_32 = fma(temp_12, temp_12, temp_18);
    // 0x000170: 0x59A0040000570508 Ffma
    temp_33 = fma(temp_16, temp_16, temp_32);
    // 0x000178: 0x508000000057080F Mufu
    temp_34 = inversesqrt(temp_33);
    // 0x000188: 0x5C68100000F70210 Fmul
    temp_35 = temp_11 * temp_34;
    // 0x000190: 0x5C68100000F70404 Fmul
    temp_36 = temp_12 * temp_34;
    // 0x000198: 0x5C68100000F70502 Fmul
    temp_37 = temp_16 * temp_34;
    // 0x0001A8: 0xE003FF874FF7FF05 Ipa
    temp_38 = gl_FragCoord.y;
    temp_39 = support_buffer.render_scale[0];
    temp_40 = temp_38 / temp_39;
    // 0x0001B0: 0x4C68100C04B70505 Fmul
    temp_41 = temp_40 * fp_c3.data[18].w;
    // 0x0001B8: 0x5C68100000170107 Fmul
    temp_42 = temp_4 * temp_4;
    // 0x0001C8: 0x5C68100000E7010E Fmul
    temp_43 = temp_4 * temp_24;
    // 0x0001D0: 0x5C68100000A7010A Fmul
    temp_44 = temp_4 * temp_26;
    // 0x0001D8: 0x5C68100000B7010B Fmul
    temp_45 = temp_4 * temp_27;
    // 0x0001E8: 0x59A0038000070007 Ffma
    temp_46 = fma(temp_3, temp_3, temp_42);
    // 0x0001F0: 0x59A007000137000E Ffma
    temp_47 = fma(temp_3, temp_30, temp_43);
    // 0x0001F8: 0x59A0050000D7000A Ffma
    temp_48 = fma(temp_3, temp_28, temp_44);
    // 0x000208: 0x59A0058000970009 Ffma
    temp_49 = fma(temp_3, temp_29, temp_45);
    // 0x000210: 0xE003FF870FF7FF00 Ipa
    temp_50 = gl_FragCoord.x;
    temp_51 = support_buffer.render_scale[0];
    temp_52 = temp_50 / temp_51;
    // 0x000218: 0x385D103F80070707 Fadd
    temp_53 = 0.0 - temp_46;
    temp_54 = temp_53 + 1.0;
    temp_55 = clamp(temp_54, 0.0, 1.0);
    // 0x000228: 0x5080000000870707 Mufu
    temp_56 = sqrt(temp_55);
    // 0x000230: 0x59A007000077100E Ffma
    temp_57 = fma(temp_35, temp_56, temp_47);
    // 0x000238: 0xE043FF900067FF10 Ipa
    temp_58 = in_attr8.x;
    // 0x000248: 0x59A0050000770404 Ffma
    temp_59 = fma(temp_36, temp_56, temp_48);
    // 0x000250: 0x59A0048000770202 Ffma
    temp_60 = fma(temp_37, temp_56, temp_49);
    // 0x000258: 0x4C98079C02070007 Mov
    // 0x000268: 0x5C68100000E70E01 Fmul
    temp_61 = temp_57 * temp_57;
    // 0x000270: 0x59A0008000470401 Ffma
    temp_62 = fma(temp_59, temp_59, temp_61);
    // 0x000278: 0x59A0008000270201 Ffma
    temp_63 = fma(temp_60, temp_60, temp_62);
    // 0x000288: 0x5080000000570101 Mufu
    temp_64 = inversesqrt(temp_63);
    // 0x000290: 0x5C68100000170E09 Fmul
    temp_65 = temp_57 * temp_64;
    // 0x000298: 0x5C6810000017040B Fmul
    temp_66 = temp_59 * temp_64;
    // 0x0002A8: 0x5C68100000170213 Fmul
    temp_67 = temp_60 * temp_64;
    // 0x0002B0: 0x4C68100C04A70004 Fmul
    temp_68 = temp_52 * fp_c3.data[18].z;
    // 0x0002B8: 0x5C62578000B70902 Fmnmx
    temp_69 = abs(temp_65);
    temp_70 = abs(temp_66);
    temp_71 = max(temp_69, temp_70);
    // 0x0002C8: 0x5C60578000271308 Fmnmx
    temp_72 = abs(temp_67);
    temp_73 = max(temp_72, temp_71);
    // 0x0002D0: 0x5080000000470808 Mufu
    temp_74 = 1.0 / temp_73;
    // 0x0002D8: 0x5C68100000870900 Fmul
    temp_75 = temp_65 * temp_74;
    // 0x0002E8: 0x5C68100000870B01 Fmul
    temp_76 = temp_66 * temp_74;
    // 0x0002F0: 0x5C69100000871302 Fmul
    temp_77 = 0.0 - temp_74;
    temp_78 = temp_67 * temp_77;
    // 0x0002F8: 0xC0BA0163EFF70000 Tex
    temp_79 = textureLod(fp_t_tcb_16, vec3(temp_75, temp_76, temp_78), 0.0).xyz;
    temp_80 = temp_79.x;
    temp_81 = temp_79.y;
    temp_82 = temp_79.z;
    // 0x000308: 0xD822034FF0C7030C Texs
    temp_83 = texture(fp_t_tcb_34, vec2(temp_0, temp_1)).x;
    // 0x000310: 0xD822020080570404 Texs
    temp_84 = texture(fp_t_tcb_20, vec2(temp_68, temp_41)).xyz;
    temp_85 = temp_84.x;
    temp_86 = temp_84.y;
    temp_87 = temp_84.z;
    // 0x000318: 0xDEBA0000C0771007 TexB
    temp_88 = texture(fp_t_cb7_20, vec3(temp_58, temp_25, temp_31)).x;
    // 0x000328: 0xE043FF8B0067FF0E Ipa
    temp_89 = in_attr3.x;
    // 0x000330: 0xE043FF8B4067FF0A Ipa
    temp_90 = in_attr3.y;
    // 0x000338: 0xE043FF8B8067FF0D Ipa
    temp_91 = in_attr3.z;
    // 0x000348: 0x5C68100000E70E0F Fmul
    temp_92 = temp_89 * temp_89;
    // 0x000350: 0x59A0078000A70A0F Ffma
    temp_93 = fma(temp_90, temp_90, temp_92);
    // 0x000358: 0x59A0078000D70D15 Ffma
    temp_94 = fma(temp_91, temp_91, temp_93);
    // 0x000368: 0x508000000057150F Mufu
    temp_95 = inversesqrt(temp_94);
    // 0x000370: 0x5C69100000F70E0E Fmul
    temp_96 = 0.0 - temp_95;
    temp_97 = temp_89 * temp_96;
    // 0x000378: 0x5C69100000F70A0A Fmul
    temp_98 = 0.0 - temp_95;
    temp_99 = temp_90 * temp_98;
    // 0x000388: 0x5C69100000F70D0D Fmul
    temp_100 = 0.0 - temp_95;
    temp_101 = temp_91 * temp_100;
    // 0x000390: 0x4C58301805C70E14 Fadd
    temp_102 = 0.0 - fp_c6.data[23].x;
    temp_103 = temp_97 + temp_102;
    // 0x000398: 0x4C58301805D70A10 Fadd
    temp_104 = 0.0 - fp_c6.data[23].y;
    temp_105 = temp_99 + temp_104;
    // 0x0003A8: 0x4C58301805E70D0F Fadd
    temp_106 = 0.0 - fp_c6.data[23].z;
    temp_107 = temp_101 + temp_106;
    // 0x0003B0: 0x01040DF760C7F012 Mov32i
    // 0x0003B8: 0x5C68100001471403 Fmul
    temp_108 = temp_103 * temp_103;
    // 0x0003C8: 0x59A0018001071011 Ffma
    temp_109 = fma(temp_105, temp_105, temp_108);
    // 0x0003D0: 0xE04BFF8F4067FF03 Ipa
    temp_110 = in_attr7.y;
    temp_111 = clamp(temp_110, 0.0, 1.0);
    // 0x0003D8: 0x59A0088000F70F11 Ffma
    temp_112 = fma(temp_107, temp_107, temp_109);
    // 0x0003E8: 0x5080000000571111 Mufu
    temp_113 = inversesqrt(temp_112);
    // 0x0003F0: 0x5C68100001171415 Fmul
    temp_114 = temp_103 * temp_113;
    // 0x0003F8: 0x5C68100000E70914 Fmul
    temp_115 = temp_65 * temp_97;
    // 0x000408: 0x5C68100001171010 Fmul
    temp_116 = temp_105 * temp_113;
    // 0x000410: 0x5C68100001170F0F Fmul
    temp_117 = temp_107 * temp_113;
    // 0x000418: 0x4C69101805C70911 Fmul
    temp_118 = 0.0 - fp_c6.data[23].x;
    temp_119 = temp_65 * temp_118;
    // 0x000428: 0x5C68100001570E15 Fmul
    temp_120 = temp_97 * temp_114;
    // 0x000430: 0x59A00A0000A70B14 Ffma
    temp_121 = fma(temp_66, temp_99, temp_115);
    // 0x000438: 0x010404000007F00E Mov32i
    // 0x000448: 0x49A1089805D70B11 Ffma
    temp_122 = 0.0 - fp_c6.data[23].y;
    temp_123 = fma(temp_66, temp_122, temp_119);
    // 0x000450: 0x59A00A8001070A10 Ffma
    temp_124 = fma(temp_99, temp_116, temp_120);
    // 0x000458: 0x4C68101805C7090A Fmul
    temp_125 = temp_65 * fp_c6.data[23].x;
    // 0x000468: 0x59A40A0000D71314 Ffma
    temp_126 = fma(temp_67, temp_101, temp_121);
    temp_127 = clamp(temp_126, 0.0, 1.0);
    // 0x000470: 0x33A007400007030E Ffma
    temp_128 = fma(temp_111, -2.0, 3.0);
    // 0x000478: 0x5C68100000370303 Fmul
    temp_129 = temp_111 * temp_111;
    // 0x000488: 0x4C98079800670015 Mov
    // 0x000490: 0x59A4080000F70D0F Ffma
    temp_130 = fma(temp_101, temp_117, temp_124);
    temp_131 = clamp(temp_130, 0.0, 1.0);
    // 0x000498: 0x49A0051805D70B0A Ffma
    temp_132 = fma(temp_66, fp_c6.data[23].y, temp_125);
    // 0x0004A8: 0x3859103F8007140D Fadd
    temp_133 = 0.0 - temp_127;
    temp_134 = temp_133 + 1.0;
    // 0x0004B0: 0x0103F0000007F010 Mov32i
    // 0x0004B8: 0x5C68100000370E03 Fmul
    temp_135 = temp_128 * temp_129;
    // 0x0004C8: 0x4C9807980057000E Mov
    // 0x0004D0: 0x49A2090400070F12 Ffma
    temp_136 = fma(temp_131, fp_c1.data[0].x, -6.98316002);
    // 0x0004D8: 0x49A4051805E71309 Ffma
    temp_137 = fma(temp_67, fp_c6.data[23].z, temp_132);
    temp_138 = clamp(temp_137, 0.0, 1.0);
    // 0x0004E8: 0x4C68101809070D0A Fmul
    temp_139 = temp_134 * fp_c6.data[36].x;
    // 0x0004F0: 0x5080000000370909 Mufu
    temp_140 = log2(temp_138);
    // 0x0004F8: 0x4C68101406370D0D Fmul
    temp_141 = temp_134 * fp_c5.data[24].w;
    // 0x000508: 0x5080400000370A0A Mufu
    temp_142 = abs(temp_139);
    temp_143 = log2(temp_142);
    // 0x000510: 0x5C68100001270F0F Fmul
    temp_144 = temp_131 * temp_136;
    // 0x000518: 0x5080400000370D0D Mufu
    temp_145 = abs(temp_141);
    temp_146 = log2(temp_145);
    // 0x000528: 0x32A0083F00070B0B Ffma
    temp_147 = fma(temp_66, 0.5, 0.5);
    // 0x000530: 0x49A5089805E71313 Ffma
    temp_148 = 0.0 - fp_c6.data[23].z;
    temp_149 = fma(temp_67, temp_148, temp_123);
    temp_150 = clamp(temp_149, 0.0, 1.0);
    // 0x000538: 0x4C98079800470012 Mov
    // 0x000548: 0x4C58301800970E0E Fadd
    temp_151 = 0.0 - fp_c6.data[2].y;
    temp_152 = fp_c6.data[1].y + temp_151;
    // 0x000550: 0x4C58301800A71515 Fadd
    temp_153 = 0.0 - fp_c6.data[2].z;
    temp_154 = fp_c6.data[1].z + temp_153;
    // 0x000558: 0x5C90008000F7000F Rro
    // 0x000568: 0x4C68101803770303 Fmul
    temp_155 = temp_135 * fp_c6.data[13].w;
    // 0x000570: 0x1E23F99999A70911 Fmul32i
    temp_156 = temp_140 * 1.20000005;
    // 0x000578: 0x4C68101406670917 Fmul
    temp_157 = temp_140 * fp_c5.data[25].z;
    // 0x000588: 0x5080000000270F09 Mufu
    temp_158 = exp2(temp_144);
    // 0x000590: 0x4C68101809170A10 Fmul
    temp_159 = temp_143 * fp_c6.data[36].y;
    // 0x000598: 0x4C5830180087120A Fadd
    temp_160 = 0.0 - fp_c6.data[2].x;
    temp_161 = fp_c6.data[1].x + temp_160;
    // 0x0005A8: 0x4C68101406470D0D Fmul
    temp_162 = temp_146 * fp_c5.data[25].x;
    // 0x0005B0: 0x4C68101801571312 Fmul
    temp_163 = temp_150 * fp_c6.data[5].y;
    // 0x0005B8: 0x51A0059800970E0E Ffma
    temp_164 = fma(temp_152, temp_147, fp_c6.data[2].y);
    // 0x0005C8: 0x5C90008001770017 Rro
    // 0x0005D0: 0x5C9000800107000F Rro
    // 0x0005D8: 0x51A0059800870A0A Ffma
    temp_165 = fma(temp_161, temp_147, fp_c6.data[2].x);
    // 0x0005E8: 0x5C90008001170010 Rro
    // 0x0005F0: 0x5084000000270F11 Mufu
    temp_166 = exp2(temp_159);
    temp_167 = clamp(temp_166, 0.0, 1.0);
    // 0x0005F8: 0x1E23EA2F98371212 Fmul32i
    temp_168 = temp_163 * 0.318309873;
    // 0x000608: 0x5080000000271010 Mufu
    temp_169 = exp2(temp_156);
    // 0x000610: 0x5C90008000D70014 Rro
    // 0x000618: 0x508000000027170D Mufu
    temp_170 = exp2(temp_157);
    // 0x000628: 0x49A1049407B70909 Ffma
    temp_171 = 0.0 - fp_c5.data[30].w;
    temp_172 = fma(temp_158, temp_171, temp_158);
    // 0x000630: 0x5084000000271414 Mufu
    temp_173 = exp2(temp_162);
    temp_174 = clamp(temp_173, 0.0, 1.0);
    // 0x000638: 0x51A0059800A7150B Ffma
    temp_175 = fma(temp_154, temp_147, fp_c6.data[2].z);
    // 0x000648: 0x4C6810180147130F Fmul
    temp_176 = temp_150 * fp_c6.data[5].x;
    // 0x000650: 0x4C68101801671313 Fmul
    temp_177 = temp_150 * fp_c6.data[5].z;
    // 0x000658: 0x4C58101407B70909 Fadd
    temp_178 = temp_172 + fp_c5.data[30].w;
    // 0x000668: 0x5C68100001671111 Fmul
    temp_179 = temp_167 * temp_22;
    // 0x000670: 0x1E23EA2F98370F0F Fmul32i
    temp_180 = temp_176 * 0.318309873;
    // 0x000678: 0x3859103F00071010 Fadd
    temp_181 = 0.0 - temp_169;
    temp_182 = temp_181 + 0.5;
    // 0x000688: 0x59A1090000971215 Ffma
    temp_183 = 0.0 - temp_178;
    temp_184 = fma(temp_168, temp_183, temp_168);
    // 0x000690: 0x5C68100000D7140D Fmul
    temp_185 = temp_174 * temp_170;
    // 0x000698: 0x1E23EA2F98371314 Fmul32i
    temp_186 = temp_177 * 0.318309873;
    // 0x0006A8: 0x4C68101808C71113 Fmul
    temp_187 = temp_179 * fp_c6.data[35].x;
    // 0x0006B0: 0x4C6C101406571010 Fmul
    temp_188 = temp_182 * fp_c5.data[25].y;
    temp_189 = clamp(temp_188, 0.0, 1.0);
    // 0x0006B8: 0x4C68101808D71112 Fmul
    temp_190 = temp_179 * fp_c6.data[35].y;
    // 0x0006C8: 0x4C68101808E71111 Fmul
    temp_191 = temp_179 * fp_c6.data[35].z;
    // 0x0006D0: 0x59A1078000970F0F Ffma
    temp_192 = 0.0 - temp_178;
    temp_193 = fma(temp_180, temp_192, temp_180);
    // 0x0006D8: 0x59A10A0000971409 Ffma
    temp_194 = 0.0 - temp_178;
    temp_195 = fma(temp_186, temp_194, temp_186);
    // 0x0006E8: 0x49A1099408271316 Ffma
    temp_196 = 0.0 - fp_c5.data[32].z;
    temp_197 = fma(temp_187, temp_196, temp_187);
    // 0x0006F0: 0x49A0081406770D10 Ffma
    temp_198 = fma(temp_185, fp_c5.data[25].w, temp_189);
    // 0x0006F8: 0x4C9807940687000D Mov
    // 0x000708: 0x49A1091408271217 Ffma
    temp_199 = 0.0 - fp_c5.data[32].z;
    temp_200 = fma(temp_190, temp_199, temp_190);
    // 0x000710: 0x49A1089408271114 Ffma
    temp_201 = 0.0 - fp_c5.data[32].z;
    temp_202 = fma(temp_191, temp_201, temp_191);
    // 0x000718: 0x4C68101408271111 Fmul
    temp_203 = temp_191 * fp_c5.data[32].z;
    // 0x000728: 0x5C58100000F7160F Fadd
    temp_204 = temp_197 + temp_193;
    // 0x000730: 0x5C58100001571715 Fadd
    temp_205 = temp_200 + temp_184;
    // 0x000738: 0x5C58100000971409 Fadd
    temp_206 = temp_202 + temp_195;
    // 0x000748: 0xF0F0000034270000 Depbar
    // 0x000750: 0x49A0010400170B0B Ffma
    temp_207 = fma(temp_175, fp_c1.data[0].y, temp_82);
    // 0x000758: 0xE043FF8F0067FF02 Ipa
    temp_208 = in_attr7.x;
    // 0x000768: 0x49A0000400170A00 Ffma
    temp_209 = fma(temp_165, fp_c1.data[0].y, temp_80);
    // 0x000770: 0x51A1069406870C0D Ffma
    temp_210 = 0.0 - fp_c5.data[26].x;
    temp_211 = fma(temp_83, temp_210, fp_c5.data[26].x);
    // 0x000778: 0x49A0008400170E0E Ffma
    temp_212 = fma(temp_164, fp_c1.data[0].y, temp_81);
    // 0x000788: 0x4C68101408271301 Fmul
    temp_213 = temp_187 * fp_c5.data[32].z;
    // 0x000790: 0x4C6810140827120C Fmul
    temp_214 = temp_190 * fp_c5.data[32].z;
    // 0x000798: 0x5C58100000B7090B Fadd
    temp_215 = temp_206 + temp_207;
    // 0x0007A8: 0x5C58100000070F0F Fadd
    temp_216 = temp_204 + temp_209;
    // 0x0007B0: 0x0103F8000007F000 Mov32i
    // 0x0007B8: 0x5C58100000D7100D Fadd
    temp_217 = temp_198 + temp_211;
    // 0x0007C8: 0x5C58100000E7150E Fadd
    temp_218 = temp_205 + temp_212;
    // 0x0007D0: 0x49A0089402E70B11 Ffma
    temp_219 = fma(temp_215, fp_c5.data[11].z, temp_203);
    // 0x0007D8: 0x49A0009402C70F0F Ffma
    temp_220 = fma(temp_216, fp_c5.data[11].x, temp_213);
    // 0x0007E8: 0x4C5C101402C70001 Fadd
    temp_221 = 1.0 + fp_c5.data[11].x;
    temp_222 = clamp(temp_221, 0.0, 1.0);
    // 0x0007F0: 0x4C68101406970D09 Fmul
    temp_223 = temp_217 * fp_c5.data[26].y;
    // 0x0007F8: 0x49A0061402D70E10 Ffma
    temp_224 = fma(temp_218, fp_c5.data[11].y, temp_214);
    // 0x000808: 0x4C5C101402D7000A Fadd
    temp_225 = 1.0 + fp_c5.data[11].y;
    temp_226 = clamp(temp_225, 0.0, 1.0);
    // 0x000810: 0x4C9807980B47000E Mov
    // 0x000818: 0x4C5C101402E70000 Fadd
    temp_227 = 1.0 + fp_c5.data[11].z;
    temp_228 = clamp(temp_227, 0.0, 1.0);
    // 0x000828: 0x5C68100000F70101 Fmul
    temp_229 = temp_222 * temp_220;
    // 0x000830: 0x4C6810180147090C Fmul
    temp_230 = temp_223 * fp_c6.data[5].x;
    // 0x000838: 0x4C6810180157090D Fmul
    temp_231 = temp_223 * fp_c6.data[5].y;
    // 0x000848: 0x5C68100001070A0B Fmul
    temp_232 = temp_226 * temp_224;
    // 0x000850: 0x4C9807980287000F Mov
    // 0x000858: 0x51A207180B470404 Ffma
    temp_233 = 0.0 - fp_c6.data[45].x;
    temp_234 = fma(temp_85, fp_c6.data[45].x, temp_233);
    // 0x000868: 0x51A207180B470505 Ffma
    temp_235 = 0.0 - fp_c6.data[45].x;
    temp_236 = fma(temp_86, fp_c6.data[45].x, temp_235);
    // 0x000870: 0x51A207180B470808 Ffma
    temp_237 = 0.0 - fp_c6.data[45].x;
    temp_238 = fma(temp_87, fp_c6.data[45].x, temp_237);
    // 0x000878: 0x5C6810000117000A Fmul
    temp_239 = temp_228 * temp_219;
    // 0x000888: 0x4C9807980297000E Mov
    // 0x000890: 0x49A0009406C70C00 Ffma
    temp_240 = fma(temp_230, fp_c5.data[27].x, temp_229);
    // 0x000898: 0x49A501180BC7070C Ffma
    temp_241 = 0.0 - fp_c6.data[47].x;
    temp_242 = fma(temp_88, temp_241, temp_208);
    temp_243 = clamp(temp_242, 0.0, 1.0);
    // 0x0008A8: 0x49A0059406C70D01 Ffma
    temp_244 = fma(temp_231, fp_c5.data[27].x, temp_232);
    // 0x0008B0: 0x5080000000370C0C Mufu
    temp_245 = log2(temp_243);
    // 0x0008B8: 0x51A007980287040B Ffma
    temp_246 = fma(temp_234, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0008C8: 0x4C68101801670909 Fmul
    temp_247 = temp_223 * fp_c6.data[5].z;
    // 0x0008D0: 0x51A0071802970504 Ffma
    temp_248 = fma(temp_236, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0008D8: 0x4C98079802A70007 Mov
    // 0x0008E8: 0x5C58300000B70005 Fadd
    temp_249 = 0.0 - temp_246;
    temp_250 = temp_240 + temp_249;
    // 0x0008F0: 0x49A0051406C70902 Ffma
    temp_251 = fma(temp_247, fp_c5.data[27].x, temp_239);
    // 0x0008F8: 0x5C58300000470109 Fadd
    temp_252 = 0.0 - temp_248;
    temp_253 = temp_244 + temp_252;
    // 0x000908: 0x51A0039802A70808 Ffma
    temp_254 = fma(temp_238, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000910: 0xE043FF8C8067FF07 Ipa
    temp_255 = in_attr4.z;
    // 0x000918: 0x4C68101803170C0D Fmul
    temp_256 = temp_245 * fp_c6.data[12].y;
    // 0x000928: 0x49A005980BF7050A Ffma
    temp_257 = fma(temp_250, fp_c6.data[47].w, temp_246);
    // 0x000930: 0x49A002180BF70909 Ffma
    temp_258 = fma(temp_253, fp_c6.data[47].w, temp_248);
    // 0x000938: 0x5C58300000870205 Fadd
    temp_259 = 0.0 - temp_254;
    temp_260 = temp_251 + temp_259;
    // 0x000948: 0x5C90008000D7000C Rro
    // 0x000950: 0x5C60178000970409 Fmnmx
    temp_261 = max(temp_248, temp_258);
    // 0x000958: 0x5080000000270C0C Mufu
    temp_262 = exp2(temp_256);
    // 0x000968: 0x49A2019803470304 Ffma
    temp_263 = 0.0 - temp_155;
    temp_264 = fma(temp_155, fp_c6.data[13].x, temp_263);
    // 0x000970: 0x5C60178000A70B0A Fmnmx
    temp_265 = max(temp_246, temp_257);
    // 0x000978: 0x49A004180BF70505 Ffma
    temp_266 = fma(temp_260, fp_c6.data[47].w, temp_254);
    // 0x000988: 0x49A201980357030B Ffma
    temp_267 = 0.0 - temp_155;
    temp_268 = fma(temp_155, fp_c6.data[13].y, temp_267);
    // 0x000990: 0x49A2019803670303 Ffma
    temp_269 = 0.0 - temp_155;
    temp_270 = fma(temp_155, fp_c6.data[13].z, temp_269);
    // 0x000998: 0x59A0050000470A0A Ffma
    temp_271 = fma(temp_265, temp_264, temp_265);
    // 0x0009A8: 0x5C60178000570805 Fmnmx
    temp_272 = max(temp_254, temp_266);
    // 0x0009B0: 0x59A0048000B70904 Ffma
    temp_273 = fma(temp_261, temp_268, temp_261);
    // 0x0009B8: 0x4C68101802B70C06 Fmul
    temp_274 = temp_262 * fp_c6.data[10].w;
    // 0x0009C8: 0x59A0028000370505 Ffma
    temp_275 = fma(temp_272, temp_270, temp_272);
    // 0x0009D0: 0x5C59100000470104 Fadd
    temp_276 = 0.0 - temp_244;
    temp_277 = temp_276 + temp_273;
    // 0x0009D8: 0x5C59100000A70003 Fadd
    temp_278 = 0.0 - temp_240;
    temp_279 = temp_278 + temp_271;
    // 0x0009E8: 0x5C59100000570205 Fadd
    temp_280 = 0.0 - temp_251;
    temp_281 = temp_280 + temp_275;
    // 0x0009F0: 0x59A0008000670401 Ffma
    temp_282 = fma(temp_277, temp_274, temp_244);
    // 0x0009F8: 0x4C58100C03870704 Fadd
    temp_283 = temp_255 + fp_c3.data[14].x;
    // 0x000A08: 0x59A0000000670300 Ffma
    temp_284 = fma(temp_279, temp_274, temp_240);
    // 0x000A10: 0x0103F8000007F003 Mov32i
    // 0x000A18: 0x0103F8000007F007 Mov32i
    // 0x000A28: 0x59A0010000670502 Ffma
    temp_285 = fma(temp_281, temp_274, temp_251);
    // 0x000A30: 0x0103F8000007F005 Mov32i
    // 0x000A38: 0x5C9807800FF70006 Mov
    // 0x000A48: 0x49A37F8C03C70404 Ffma
    temp_286 = 0.0 - fp_c3.data[15].x;
    temp_287 = fma(temp_283, temp_286, -0.0);
    // 0x000A50: 0xE30000000007000F Exit
    out_attr0.x = temp_284;
    out_attr0.y = temp_282;
    out_attr0.z = temp_285;
    out_attr0.w = 1.0;
    out_attr1.x = temp_287;
    out_attr1.y = 1.0;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
