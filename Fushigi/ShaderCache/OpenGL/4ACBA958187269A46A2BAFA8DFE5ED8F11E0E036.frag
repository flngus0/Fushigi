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

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_8;
layout (binding = 2) uniform samplerCube fp_t_tcb_16;
layout (binding = 3) uniform sampler2D fp_t_tcb_34;
layout (binding = 4) uniform sampler2D fp_t_tcb_20;
layout (binding = 5) uniform sampler2D fp_t_tcb_32;
layout (binding = 6) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
layout (location = 7) in vec4 in_attr7;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise vec2 temp_4;
    precise float temp_5;
    precise float temp_6;
    precise vec2 temp_7;
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
    precise vec3 temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise vec3 temp_134;
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
    precise float temp_305;
    // 0x000008: 0xE003FF87CFF7FF02 Ipa
    // 0x000010: 0x5080000000470202 Mufu
    // 0x000018: 0xE043FF8E0027FF15 Ipa
    temp_0 = in_attr6.x;
    // 0x000028: 0xE043FF8E4027FF12 Ipa
    temp_1 = in_attr6.y;
    // 0x000030: 0xE043FF8D8027FF04 Ipa
    temp_2 = in_attr5.z;
    // 0x000038: 0xE043FF8DC027FF05 Ipa
    temp_3 = in_attr5.w;
    // 0x000048: 0xD830026FF1271500 Texs
    temp_4 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_5 = temp_4.x;
    temp_6 = temp_4.y;
    // 0x000050: 0xD830008FF0570404 Texs
    temp_7 = texture(fp_t_tcb_8, vec2(temp_2, temp_3)).xy;
    temp_8 = temp_7.x;
    temp_9 = temp_7.y;
    // 0x000058: 0xE043FF8A0027FF0F Ipa
    temp_10 = in_attr2.x;
    // 0x000068: 0xE043FF890027FF0A Ipa
    temp_11 = in_attr1.x;
    // 0x000070: 0xE043FF8A4027FF03 Ipa
    temp_12 = in_attr2.y;
    // 0x000078: 0xE043FF894027FF07 Ipa
    temp_13 = in_attr1.y;
    // 0x000088: 0xE043FF8A8027FF06 Ipa
    temp_14 = in_attr2.z;
    // 0x000090: 0xE043FF898027FF09 Ipa
    temp_15 = in_attr1.z;
    // 0x000098: 0xE043FF8B0027FF0E Ipa
    temp_16 = in_attr3.x;
    // 0x0000A8: 0xE043FF880027FF08 Ipa
    temp_17 = in_attr0.x;
    // 0x0000B0: 0xE043FF884027FF10 Ipa
    temp_18 = in_attr0.y;
    // 0x0000B8: 0xE043FF888027FF11 Ipa
    temp_19 = in_attr0.z;
    // 0x0000C8: 0x5C68100000F70F0C Fmul
    temp_20 = temp_10 * temp_10;
    // 0x0000D0: 0x5C68100000A70A0D Fmul
    temp_21 = temp_11 * temp_11;
    // 0x0000D8: 0x59A006000037030C Ffma
    temp_22 = fma(temp_12, temp_12, temp_20);
    // 0x0000E8: 0x59A006800077070B Ffma
    temp_23 = fma(temp_13, temp_13, temp_21);
    // 0x0000F0: 0xE043FF8B4027FF0D Ipa
    temp_24 = in_attr3.y;
    // 0x0000F8: 0x5C68100000870816 Fmul
    temp_25 = temp_17 * temp_17;
    // 0x000108: 0x59A0060000670613 Ffma
    temp_26 = fma(temp_14, temp_14, temp_22);
    // 0x000110: 0x59A005800097090C Ffma
    temp_27 = fma(temp_15, temp_15, temp_23);
    // 0x000118: 0xE043FF8B8027FF0B Ipa
    temp_28 = in_attr3.z;
    // 0x000128: 0x59A00B0001071016 Ffma
    temp_29 = fma(temp_18, temp_18, temp_25);
    // 0x000130: 0x5080000000571314 Mufu
    temp_30 = inversesqrt(temp_26);
    // 0x000138: 0x5C68100000E70E13 Fmul
    temp_31 = temp_16 * temp_16;
    // 0x000148: 0x5080000000570C0C Mufu
    temp_32 = inversesqrt(temp_27);
    // 0x000150: 0x5C68100001470F0F Fmul
    temp_33 = temp_10 * temp_30;
    // 0x000158: 0x5C68100001470303 Fmul
    temp_34 = temp_12 * temp_30;
    // 0x000168: 0x5C68100001470606 Fmul
    temp_35 = temp_14 * temp_30;
    // 0x000170: 0x5C68100000C70707 Fmul
    temp_36 = temp_13 * temp_32;
    // 0x000178: 0x5C68100000C70909 Fmul
    temp_37 = temp_15 * temp_32;
    // 0x000188: 0x5C68100000C70A0A Fmul
    temp_38 = temp_11 * temp_32;
    // 0x000190: 0x59A0098000D70D0C Ffma
    temp_39 = fma(temp_24, temp_24, temp_31);
    // 0x000198: 0x59A00B0001171113 Ffma
    temp_40 = fma(temp_19, temp_19, temp_29);
    // 0x0001A8: 0x5080000000571313 Mufu
    temp_41 = inversesqrt(temp_40);
    // 0x0001B0: 0x59A0060000B70B0C Ffma
    temp_42 = fma(temp_28, temp_28, temp_39);
    // 0x0001B8: 0x5080000000570C0C Mufu
    temp_43 = inversesqrt(temp_42);
    // 0x0001C8: 0x5C68100001370808 Fmul
    temp_44 = temp_17 * temp_41;
    // 0x0001D0: 0x5C68100001371010 Fmul
    temp_45 = temp_18 * temp_41;
    // 0x0001D8: 0x5C68100001371111 Fmul
    temp_46 = temp_19 * temp_41;
    // 0x0001E8: 0x5C69100000C70E0E Fmul
    temp_47 = 0.0 - temp_43;
    temp_48 = temp_16 * temp_47;
    // 0x0001F0: 0x5C69100000C70D0D Fmul
    temp_49 = 0.0 - temp_43;
    temp_50 = temp_24 * temp_49;
    // 0x0001F8: 0x5C69100000C70B0B Fmul
    temp_51 = 0.0 - temp_43;
    temp_52 = temp_28 * temp_51;
    // 0x000208: 0xF0F0000034170000 Depbar
    // 0x000210: 0x5C68100000F7010F Fmul
    temp_53 = temp_6 * temp_33;
    // 0x000218: 0x5C68100000370116 Fmul
    temp_54 = temp_6 * temp_34;
    // 0x000228: 0x4C58301805C70E03 Fadd
    temp_55 = 0.0 - fp_c6.data[23].x;
    temp_56 = temp_48 + temp_55;
    // 0x000230: 0x5C68100000670106 Fmul
    temp_57 = temp_6 * temp_35;
    // 0x000238: 0x59A0078000A7000A Ffma
    temp_58 = fma(temp_5, temp_38, temp_53);
    // 0x000248: 0x5C6810000017010F Fmul
    temp_59 = temp_6 * temp_6;
    // 0x000250: 0x59A00B0000770016 Ffma
    temp_60 = fma(temp_5, temp_36, temp_54);
    // 0x000258: 0x4C58301805D70D01 Fadd
    temp_61 = 0.0 - fp_c6.data[23].y;
    temp_62 = temp_50 + temp_61;
    // 0x000268: 0x5C6810000037030C Fmul
    temp_63 = temp_56 * temp_56;
    // 0x000270: 0x59A0030000970006 Ffma
    temp_64 = fma(temp_5, temp_37, temp_57);
    // 0x000278: 0x59A0078000070007 Ffma
    temp_65 = fma(temp_5, temp_5, temp_59);
    // 0x000288: 0x4C58301805E70B0F Fadd
    temp_66 = 0.0 - fp_c6.data[23].z;
    temp_67 = temp_52 + temp_66;
    // 0x000290: 0x59A006000017010C Ffma
    temp_68 = fma(temp_62, temp_62, temp_63);
    // 0x000298: 0x385D103F80070707 Fadd
    temp_69 = 0.0 - temp_65;
    temp_70 = temp_69 + 1.0;
    temp_71 = clamp(temp_70, 0.0, 1.0);
    // 0x0002A8: 0x5080000000870707 Mufu
    temp_72 = sqrt(temp_71);
    // 0x0002B0: 0x59A0060000F70F0C Ffma
    temp_73 = fma(temp_67, temp_67, temp_68);
    // 0x0002B8: 0x5080000000570C0C Mufu
    temp_74 = inversesqrt(temp_73);
    // 0x0002C8: 0x59A0050000770808 Ffma
    temp_75 = fma(temp_44, temp_72, temp_58);
    // 0x0002D0: 0x59A00B0000771016 Ffma
    temp_76 = fma(temp_45, temp_72, temp_60);
    // 0x0002D8: 0xE003FF870FF7FF10 Ipa
    temp_77 = gl_FragCoord.x;
    temp_78 = support_buffer.render_scale[0];
    temp_79 = temp_77 / temp_78;
    // 0x0002E8: 0x59A0030000771107 Ffma
    temp_80 = fma(temp_46, temp_72, temp_64);
    // 0x0002F0: 0xE003FF874FF7FF11 Ipa
    temp_81 = gl_FragCoord.y;
    temp_82 = support_buffer.render_scale[0];
    temp_83 = temp_81 / temp_82;
    // 0x0002F8: 0x5C68100000C70309 Fmul
    temp_84 = temp_56 * temp_74;
    // 0x000308: 0x5C68100000C7010A Fmul
    temp_85 = temp_62 * temp_74;
    // 0x000310: 0x5C68100000C70F00 Fmul
    temp_86 = temp_67 * temp_74;
    // 0x000318: 0xE043FF8D4027FF0C Ipa
    temp_87 = in_attr5.y;
    // 0x000328: 0x5C68100000870803 Fmul
    temp_88 = temp_75 * temp_75;
    // 0x000330: 0x5C68100000970E0F Fmul
    temp_89 = temp_48 * temp_84;
    // 0x000338: 0x59A0018001671601 Ffma
    temp_90 = fma(temp_76, temp_76, temp_88);
    // 0x000348: 0xE043FF8D0027FF03 Ipa
    temp_91 = in_attr5.x;
    // 0x000350: 0x59A0078000A70D0A Ffma
    temp_92 = fma(temp_50, temp_85, temp_89);
    // 0x000358: 0x59A0008000770701 Ffma
    temp_93 = fma(temp_80, temp_80, temp_90);
    // 0x000368: 0x5080000000570101 Mufu
    temp_94 = inversesqrt(temp_93);
    // 0x000370: 0x59A4050000070B00 Ffma
    temp_95 = fma(temp_52, temp_86, temp_92);
    temp_96 = clamp(temp_95, 0.0, 1.0);
    // 0x000378: 0x4C68100C04A71010 Fmul
    temp_97 = temp_79 * fp_c3.data[18].z;
    // 0x000388: 0x4C68100C04B71111 Fmul
    temp_98 = temp_83 * fp_c3.data[18].w;
    // 0x000390: 0x5C68100000170808 Fmul
    temp_99 = temp_75 * temp_94;
    // 0x000398: 0x5C68100000171606 Fmul
    temp_100 = temp_76 * temp_94;
    // 0x0003A8: 0x5C68100000E7080F Fmul
    temp_101 = temp_99 * temp_48;
    // 0x0003B0: 0x5C6810000017070E Fmul
    temp_102 = temp_80 * temp_94;
    // 0x0003B8: 0x4C69101805C70813 Fmul
    temp_103 = 0.0 - fp_c6.data[23].x;
    temp_104 = temp_99 * temp_103;
    // 0x0003C8: 0x5C62578000670801 Fmnmx
    temp_105 = abs(temp_99);
    temp_106 = abs(temp_100);
    temp_107 = max(temp_105, temp_106);
    // 0x0003D0: 0x4C68101805C70814 Fmul
    temp_108 = temp_99 * fp_c6.data[23].x;
    // 0x0003D8: 0x49A0019405870403 Ffma
    temp_109 = fma(temp_8, fp_c5.data[22].x, temp_91);
    // 0x0003E8: 0xE043FF900027FF04 Ipa
    temp_110 = in_attr8.x;
    // 0x0003F0: 0x59A0078000D7060D Ffma
    temp_111 = fma(temp_100, temp_50, temp_101);
    // 0x0003F8: 0x0103F0000007F00F Mov32i
    // 0x000408: 0x49A006140597050C Ffma
    temp_112 = fma(temp_9, fp_c5.data[22].y, temp_87);
    // 0x000410: 0xE043FF904027FF05 Ipa
    temp_113 = in_attr8.y;
    // 0x000418: 0x5C60578000170E17 Fmnmx
    temp_114 = abs(temp_102);
    temp_115 = max(temp_114, temp_107);
    // 0x000428: 0x49A1099805D70613 Ffma
    temp_116 = 0.0 - fp_c6.data[23].y;
    temp_117 = fma(temp_100, temp_116, temp_104);
    // 0x000430: 0x5080000000471717 Mufu
    temp_118 = 1.0 / temp_115;
    // 0x000438: 0x49A00A1805D70614 Ffma
    temp_119 = fma(temp_100, fp_c6.data[23].y, temp_108);
    // 0x000448: 0x32A007BF0007060F Ffma
    temp_120 = fma(temp_100, 0.5, 0.5);
    // 0x000450: 0x59A4068000B70E0D Ffma
    temp_121 = fma(temp_102, temp_52, temp_111);
    temp_122 = clamp(temp_121, 0.0, 1.0);
    // 0x000458: 0x4C98079800870007 Mov
    // 0x000468: 0x4C9807980097000B Mov
    // 0x000470: 0x4C98079800A70001 Mov
    // 0x000478: 0x5C68100001770808 Fmul
    temp_123 = temp_99 * temp_118;
    // 0x000488: 0x5C68100001770609 Fmul
    temp_124 = temp_100 * temp_118;
    // 0x000490: 0xE043FF908027FF06 Ipa
    temp_125 = in_attr8.z;
    // 0x000498: 0x5C69100001770E0A Fmul
    temp_126 = 0.0 - temp_118;
    temp_127 = temp_102 * temp_126;
    // 0x0004A8: 0x4C98079C02070017 Mov
    // 0x0004B0: 0xC0BA0163EFF70808 Tex
    temp_128 = textureLod(fp_t_tcb_16, vec3(temp_123, temp_124, temp_127), 0.0).xyz;
    temp_129 = temp_128.x;
    temp_130 = temp_128.y;
    temp_131 = temp_128.z;
    // 0x0004B8: 0xD822034FF1271512 Texs
    temp_132 = texture(fp_t_tcb_34, vec2(temp_0, temp_1)).x;
    // 0x0004C8: 0xDEBA0000C1770404 TexB
    temp_133 = texture(fp_t_cb7_20, vec3(temp_110, temp_113, temp_125)).x;
    // 0x0004D0: 0xD822020161171010 Texs
    temp_134 = texture(fp_t_tcb_20, vec2(temp_97, temp_98)).xyz;
    temp_135 = temp_134.x;
    temp_136 = temp_134.y;
    temp_137 = temp_134.z;
    // 0x0004D8: 0xD822032FF0C70303 Texs
    temp_138 = texture(fp_t_tcb_32, vec2(temp_109, temp_112)).x;
    // 0x0004E8: 0x4C59101800470707 Fadd
    temp_139 = 0.0 - fp_c6.data[2].x;
    temp_140 = temp_139 + fp_c6.data[1].x;
    // 0x0004F0: 0x4C59101800670101 Fadd
    temp_141 = 0.0 - fp_c6.data[2].z;
    temp_142 = temp_141 + fp_c6.data[1].z;
    // 0x0004F8: 0x3859103F80070D0D Fadd
    temp_143 = 0.0 - temp_122;
    temp_144 = temp_143 + 1.0;
    // 0x000508: 0x49A5099805E70E13 Ffma
    temp_145 = 0.0 - fp_c6.data[23].z;
    temp_146 = fma(temp_102, temp_145, temp_117);
    temp_147 = clamp(temp_146, 0.0, 1.0);
    // 0x000510: 0x49A40A1805E70E14 Ffma
    temp_148 = fma(temp_102, fp_c6.data[23].z, temp_119);
    temp_149 = clamp(temp_148, 0.0, 1.0);
    // 0x000518: 0x4C68101809070D0E Fmul
    temp_150 = temp_144 * fp_c6.data[36].x;
    // 0x000528: 0x4C68101406370D0D Fmul
    temp_151 = temp_144 * fp_c5.data[24].w;
    // 0x000530: 0x5080400000370E0E Mufu
    temp_152 = abs(temp_150);
    temp_153 = log2(temp_152);
    // 0x000538: 0x4C59101800570B0C Fadd
    temp_154 = 0.0 - fp_c6.data[2].y;
    temp_155 = temp_154 + fp_c6.data[1].y;
    // 0x000548: 0x5080400000370D0D Mufu
    temp_156 = abs(temp_151);
    temp_157 = log2(temp_156);
    // 0x000550: 0x51A0039800870F0B Ffma
    temp_158 = fma(temp_120, temp_140, fp_c6.data[2].x);
    // 0x000558: 0x4C68101801471305 Fmul
    temp_159 = temp_147 * fp_c6.data[5].x;
    // 0x000568: 0x010404000007F017 Mov32i
    // 0x000570: 0x51A0061800970F07 Ffma
    temp_160 = fma(temp_120, temp_155, fp_c6.data[2].y);
    // 0x000578: 0x51A0009800A70F0F Ffma
    temp_161 = fma(temp_120, temp_142, fp_c6.data[2].z);
    // 0x000588: 0x01040DF760C7F001 Mov32i
    // 0x000590: 0x1E23EA2F98370506 Fmul32i
    temp_162 = temp_159 * 0.318309873;
    // 0x000598: 0x4C68101809170E05 Fmul
    temp_163 = temp_153 * fp_c6.data[36].y;
    // 0x0005A8: 0x49A2008400070001 Ffma
    temp_164 = fma(temp_96, fp_c1.data[0].x, -6.98316002);
    // 0x0005B0: 0x5C68100000170001 Fmul
    temp_165 = temp_96 * temp_164;
    // 0x0005B8: 0x5C90008000170015 Rro
    // 0x0005C8: 0x4C68101801571301 Fmul
    temp_166 = temp_147 * fp_c6.data[5].y;
    // 0x0005D0: 0x5080000000271500 Mufu
    temp_167 = exp2(temp_165);
    // 0x0005D8: 0x4C68101801671313 Fmul
    temp_168 = temp_147 * fp_c6.data[5].z;
    // 0x0005E8: 0x1E23EA2F9837010C Fmul32i
    temp_169 = temp_166 * 0.318309873;
    // 0x0005F0: 0x1E23EA2F98371313 Fmul32i
    temp_170 = temp_168 * 0.318309873;
    // 0x0005F8: 0x49A1001407B70000 Ffma
    temp_171 = 0.0 - fp_c5.data[30].w;
    temp_172 = fma(temp_167, temp_171, temp_167);
    // 0x000608: 0x4C58101407B70001 Fadd
    temp_173 = temp_172 + fp_c5.data[30].w;
    // 0x000610: 0x59A1060000C70100 Ffma
    temp_174 = 0.0 - temp_169;
    temp_175 = fma(temp_173, temp_174, temp_169);
    // 0x000618: 0x59A1030000670106 Ffma
    temp_176 = 0.0 - temp_162;
    temp_177 = fma(temp_173, temp_176, temp_162);
    // 0x000628: 0x59A1098001370101 Ffma
    temp_178 = 0.0 - temp_170;
    temp_179 = fma(temp_173, temp_178, temp_170);
    // 0x000630: 0x5C90008000570013 Rro
    // 0x000638: 0x4C98079809B70005 Mov
    // 0x000648: 0x508400000027130C Mufu
    temp_180 = exp2(temp_163);
    temp_181 = clamp(temp_180, 0.0, 1.0);
    // 0x000650: 0x4C58101408170505 Fadd
    temp_182 = fp_c6.data[38].w + fp_c5.data[32].y;
    // 0x000658: 0x5C68100000570C0C Fmul
    temp_183 = temp_181 * temp_182;
    // 0x000668: 0x4C68101808C70C05 Fmul
    temp_184 = temp_183 * fp_c6.data[35].x;
    // 0x000670: 0xF0F0000034270000 Depbar
    // 0x000678: 0x49A0040400170B08 Ffma
    temp_185 = fma(temp_158, fp_c1.data[0].y, temp_129);
    // 0x000688: 0x49A102940827050B Ffma
    temp_186 = 0.0 - fp_c5.data[32].z;
    temp_187 = fma(temp_184, temp_186, temp_184);
    // 0x000690: 0x49A0050400170F0A Ffma
    temp_188 = fma(temp_161, fp_c1.data[0].y, temp_131);
    // 0x000698: 0x49A0048400170707 Ffma
    temp_189 = fma(temp_160, fp_c1.data[0].y, temp_130);
    // 0x0006A8: 0x4C68101808D70C09 Fmul
    temp_190 = temp_183 * fp_c6.data[35].y;
    // 0x0006B0: 0x5C58100000670B0B Fadd
    temp_191 = temp_187 + temp_177;
    // 0x0006B8: 0x4C68101808E70C06 Fmul
    temp_192 = temp_183 * fp_c6.data[35].z;
    // 0x0006C8: 0x49A104940827090E Ffma
    temp_193 = 0.0 - fp_c5.data[32].z;
    temp_194 = fma(temp_190, temp_193, temp_190);
    // 0x0006D0: 0x4C68101408270909 Fmul
    temp_195 = temp_190 * fp_c5.data[32].z;
    // 0x0006D8: 0x49A103140827060F Ffma
    temp_196 = 0.0 - fp_c5.data[32].z;
    temp_197 = fma(temp_192, temp_196, temp_192);
    // 0x0006E8: 0x5C58100000070E0E Fadd
    temp_198 = temp_194 + temp_175;
    // 0x0006F0: 0x4C68101406470D00 Fmul
    temp_199 = temp_157 * fp_c5.data[25].x;
    // 0x0006F8: 0x4C6810140827050D Fmul
    temp_200 = temp_184 * fp_c5.data[32].z;
    // 0x000708: 0x0103F8000007F005 Mov32i
    // 0x000710: 0x5C58100000170F0F Fadd
    temp_201 = temp_197 + temp_179;
    // 0x000718: 0x5080000000371401 Mufu
    temp_202 = log2(temp_149);
    // 0x000728: 0x5C58100000770E07 Fadd
    temp_203 = temp_198 + temp_189;
    // 0x000730: 0x5C90008000070013 Rro
    // 0x000738: 0x5084000000271300 Mufu
    temp_204 = exp2(temp_199);
    temp_205 = clamp(temp_204, 0.0, 1.0);
    // 0x000748: 0x5C58100000A70F0A Fadd
    temp_206 = temp_201 + temp_188;
    // 0x000750: 0x4C6810140827060F Fmul
    temp_207 = temp_192 * fp_c5.data[32].z;
    // 0x000758: 0x1E23F99999A7010C Fmul32i
    temp_208 = temp_202 * 1.20000005;
    // 0x000768: 0x4C68101406670101 Fmul
    temp_209 = temp_202 * fp_c5.data[25].z;
    // 0x000770: 0x4C98079406870013 Mov
    // 0x000778: 0x49A0079402E70A06 Ffma
    temp_210 = fma(temp_206, fp_c5.data[11].z, temp_207);
    // 0x000788: 0x49A0049402D7070A Ffma
    temp_211 = fma(temp_203, fp_c5.data[11].y, temp_195);
    // 0x000790: 0x4C5C101402D70509 Fadd
    temp_212 = 1.0 + fp_c5.data[11].y;
    temp_213 = clamp(temp_212, 0.0, 1.0);
    // 0x000798: 0x4C5C101402C70507 Fadd
    temp_214 = 1.0 + fp_c5.data[11].x;
    temp_215 = clamp(temp_214, 0.0, 1.0);
    // 0x0007A8: 0x5C90008000170015 Rro
    // 0x0007B0: 0x51A109940687120E Ffma
    temp_216 = 0.0 - fp_c5.data[26].x;
    temp_217 = fma(temp_132, temp_216, fp_c5.data[26].x);
    // 0x0007B8: 0x5080000000271501 Mufu
    temp_218 = exp2(temp_209);
    // 0x0007C8: 0x5C90008000C7000C Rro
    // 0x0007D0: 0x4C9807980B47000F Mov
    // 0x0007D8: 0x5080000000270C0C Mufu
    temp_219 = exp2(temp_208);
    // 0x0007E8: 0x5C58100000371212 Fadd
    temp_220 = temp_132 + temp_138;
    // 0x0007F0: 0x51A207980B471616 Ffma
    temp_221 = 0.0 - fp_c6.data[45].x;
    temp_222 = fma(temp_137, fp_c6.data[45].x, temp_221);
    // 0x0007F8: 0x5C68100000170000 Fmul
    temp_223 = temp_205 * temp_218;
    // 0x000808: 0x3859103F00070C01 Fadd
    temp_224 = 0.0 - temp_219;
    temp_225 = temp_224 + 0.5;
    // 0x000810: 0x5C58100000870B0C Fadd
    temp_226 = temp_191 + temp_185;
    // 0x000818: 0x4C6C101406570101 Fmul
    temp_227 = temp_225 * fp_c5.data[25].y;
    temp_228 = clamp(temp_227, 0.0, 1.0);
    // 0x000828: 0x49A0069402C70C0C Ffma
    temp_229 = fma(temp_226, fp_c5.data[11].x, temp_200);
    // 0x000830: 0x4C5C101402E7050D Fadd
    temp_230 = 1.0 + fp_c5.data[11].z;
    temp_231 = clamp(temp_230, 0.0, 1.0);
    // 0x000838: 0x5C68100000A70905 Fmul
    temp_232 = temp_213 * temp_211;
    // 0x000848: 0x51A207980B47110A Ffma
    temp_233 = 0.0 - fp_c6.data[45].x;
    temp_234 = fma(temp_136, fp_c6.data[45].x, temp_233);
    // 0x000850: 0x49A0009406770000 Ffma
    temp_235 = fma(temp_223, fp_c5.data[25].w, temp_228);
    // 0x000858: 0xE04BFF8F4027FF01 Ipa
    temp_236 = in_attr7.y;
    temp_237 = clamp(temp_236, 0.0, 1.0);
    // 0x000868: 0x5C68100000670D06 Fmul
    temp_238 = temp_231 * temp_210;
    // 0x000870: 0x4C9807980287000D Mov
    // 0x000878: 0x5C58100000E7000E Fadd
    temp_239 = temp_235 + temp_217;
    // 0x000888: 0x5C68100000C70700 Fmul
    temp_240 = temp_215 * temp_229;
    // 0x000890: 0x51A207980B471007 Ffma
    temp_241 = 0.0 - fp_c6.data[45].x;
    temp_242 = fma(temp_135, fp_c6.data[45].x, temp_241);
    // 0x000898: 0x4C9807980297000F Mov
    // 0x0008A8: 0x4C98079802A70010 Mov
    // 0x0008B0: 0x4C68101406970E0E Fmul
    temp_243 = temp_239 * fp_c5.data[26].y;
    // 0x0008B8: 0x51A0069802870707 Ffma
    temp_244 = fma(temp_242, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0008C8: 0x51A0079802970A0A Ffma
    temp_245 = fma(temp_234, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0008D0: 0x51A0081802A71616 Ffma
    temp_246 = fma(temp_222, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0008D8: 0x4C68101801670E0C Fmul
    temp_247 = temp_243 * fp_c6.data[5].z;
    // 0x0008E8: 0x5C68100000170108 Fmul
    temp_248 = temp_237 * temp_237;
    // 0x0008F0: 0x33A00BC00007010B Ffma
    temp_249 = fma(temp_237, -2.0, 3.0);
    // 0x0008F8: 0x5C68100001471401 Fmul
    temp_250 = temp_149 * temp_149;
    // 0x000908: 0x5C68100000870B0B Fmul
    temp_251 = temp_249 * temp_248;
    // 0x000910: 0x33A00BC000071408 Ffma
    temp_252 = fma(temp_149, -2.0, 3.0);
    // 0x000918: 0x4C68101803770B0B Fmul
    temp_253 = temp_251 * fp_c6.data[13].w;
    // 0x000928: 0x5C68100000170808 Fmul
    temp_254 = temp_252 * temp_250;
    // 0x000930: 0xE043FF8F0027FF01 Ipa
    temp_255 = in_attr7.x;
    // 0x000938: 0x59A1090000370803 Ffma
    temp_256 = 0.0 - temp_138;
    temp_257 = fma(temp_254, temp_256, temp_220);
    // 0x000948: 0x49A67F9406370303 Ffma
    temp_258 = fma(temp_257, fp_c5.data[24].w, -0.0);
    temp_259 = clamp(temp_258, 0.0, 1.0);
    // 0x000950: 0x49A500980BC70409 Ffma
    temp_260 = 0.0 - fp_c6.data[47].x;
    temp_261 = fma(temp_133, temp_260, temp_255);
    temp_262 = clamp(temp_261, 0.0, 1.0);
    // 0x000958: 0x4C68101801470E01 Fmul
    temp_263 = temp_243 * fp_c6.data[5].x;
    // 0x000968: 0x5080000000370909 Mufu
    temp_264 = log2(temp_262);
    // 0x000970: 0x4C68101801570E04 Fmul
    temp_265 = temp_243 * fp_c6.data[5].y;
    // 0x000978: 0x49A0001406C70100 Ffma
    temp_266 = fma(temp_263, fp_c5.data[27].x, temp_240);
    // 0x000988: 0x49A0029406C70401 Ffma
    temp_267 = fma(temp_265, fp_c5.data[27].x, temp_232);
    // 0x000990: 0x49A0031406C70C04 Ffma
    temp_268 = fma(temp_247, fp_c5.data[27].x, temp_238);
    // 0x000998: 0x5C58300000770005 Fadd
    temp_269 = 0.0 - temp_244;
    temp_270 = temp_266 + temp_269;
    // 0x0009A8: 0x4C68101803170906 Fmul
    temp_271 = temp_264 * fp_c6.data[12].y;
    // 0x0009B0: 0xE043FF8C8027FF09 Ipa
    temp_272 = in_attr4.z;
    // 0x0009B8: 0x5C58300000A7010C Fadd
    temp_273 = 0.0 - temp_245;
    temp_274 = temp_267 + temp_273;
    // 0x0009C8: 0x5C5830000167040D Fadd
    temp_275 = 0.0 - temp_246;
    temp_276 = temp_268 + temp_275;
    // 0x0009D0: 0x49A003980BF70505 Ffma
    temp_277 = fma(temp_270, fp_c6.data[47].w, temp_244);
    // 0x0009D8: 0x5C9000800067000E Rro
    // 0x0009E8: 0x49A005180BF70C0C Ffma
    temp_278 = fma(temp_274, fp_c6.data[47].w, temp_245);
    // 0x0009F0: 0x5080000000270E0E Mufu
    temp_279 = exp2(temp_271);
    // 0x0009F8: 0x49A00B180BF70D0D Ffma
    temp_280 = fma(temp_276, fp_c6.data[47].w, temp_246);
    // 0x000A08: 0x49A2059803570B02 Ffma
    temp_281 = 0.0 - temp_253;
    temp_282 = fma(temp_253, fp_c6.data[13].y, temp_281);
    // 0x000A10: 0x5C60178000570707 Fmnmx
    temp_283 = max(temp_244, temp_277);
    // 0x000A18: 0x49A2059803470B05 Ffma
    temp_284 = 0.0 - temp_253;
    temp_285 = fma(temp_253, fp_c6.data[13].x, temp_284);
    // 0x000A28: 0x5C60178000C70A0C Fmnmx
    temp_286 = max(temp_245, temp_278);
    // 0x000A30: 0x49A2059803670B0B Ffma
    temp_287 = 0.0 - temp_253;
    temp_288 = fma(temp_253, fp_c6.data[13].z, temp_287);
    // 0x000A38: 0x5C60178000D7160D Fmnmx
    temp_289 = max(temp_246, temp_280);
    // 0x000A48: 0x59A0038000770505 Ffma
    temp_290 = fma(temp_285, temp_283, temp_283);
    // 0x000A50: 0x59A0060000C70206 Ffma
    temp_291 = fma(temp_282, temp_286, temp_286);
    // 0x000A58: 0x4C68101802B70E07 Fmul
    temp_292 = temp_279 * fp_c6.data[10].w;
    // 0x000A68: 0x59A0068000D70B0B Ffma
    temp_293 = fma(temp_288, temp_289, temp_289);
    // 0x000A70: 0x5C59100000570002 Fadd
    temp_294 = 0.0 - temp_266;
    temp_295 = temp_294 + temp_290;
    // 0x000A78: 0x5C59100000670106 Fadd
    temp_296 = 0.0 - temp_267;
    temp_297 = temp_296 + temp_291;
    // 0x000A88: 0x5C59100000B70405 Fadd
    temp_298 = 0.0 - temp_268;
    temp_299 = temp_298 + temp_293;
    // 0x000A90: 0x4C58100C03870908 Fadd
    temp_300 = temp_272 + fp_c3.data[14].x;
    // 0x000A98: 0x59A0000000770200 Ffma
    temp_301 = fma(temp_295, temp_292, temp_266);
    // 0x000AA8: 0x59A0008000770601 Ffma
    temp_302 = fma(temp_297, temp_292, temp_267);
    // 0x000AB0: 0x5C9807800FF70006 Mov
    // 0x000AB8: 0x59A0020000770502 Ffma
    temp_303 = fma(temp_299, temp_292, temp_268);
    // 0x000AC8: 0x0103F8000007F005 Mov32i
    // 0x000AD0: 0x49A37F8C03C70804 Ffma
    temp_304 = 0.0 - fp_c3.data[15].x;
    temp_305 = fma(temp_300, temp_304, -0.0);
    // 0x000AD8: 0x5C98078000370007 Mov
    // 0x000AE8: 0xE30000000007000F Exit
    out_attr0.x = temp_301;
    out_attr0.y = temp_302;
    out_attr0.z = temp_303;
    out_attr0.w = temp_259;
    out_attr1.x = temp_305;
    out_attr1.y = 1.0;
    out_attr1.z = 0.0;
    out_attr1.w = temp_259;
    return;
}
